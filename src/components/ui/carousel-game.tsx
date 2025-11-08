"use client"

import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { EmblaCarouselType } from 'embla-carousel'


type CarouselGameApi = UseEmblaCarouselType[1]
type UseCarouselGameParameters = Parameters<typeof useEmblaCarousel>
type CarouselGameOptions = UseCarouselGameParameters[0]
type CarouselGamePlugin = UseCarouselGameParameters[1]

type CarouselGameProps = {
  opts?: CarouselGameOptions
  plugins?: CarouselGamePlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselGameApi) => void
}

type CarouselGameContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselGameProps

const CarouselGameContext = React.createContext<CarouselGameContextProps | null>(null)

function useCarouselGame() {
  const context = React.useContext(CarouselGameContext)

  if (!context) {
    throw new Error("useCarouselGame must be used within a <CarouselGame />")
  }

  return context
}

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = React.ComponentPropsWithRef<'button'>


export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

const CarouselGame = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselGameProps & { index?: (val: number) => void }
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      index,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

    React.useEffect(() => {
      if (index) index(selectedIndex)
    }, [selectedIndex])

    const onSelect = React.useCallback((api: CarouselGameApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <>

        <CarouselGameContext.Provider
          value={{
            carouselRef,
            api: api,
            opts,
            orientation:
              orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
          }}
        >
          <div
            ref={ref}
            onKeyDownCapture={handleKeyDown}
            className={cn("relative", className)}
            role="region"
            aria-roledescription="carousel"
            {...props}
          >
            {children}
          </div>
          {/* <div className="flex justify-center pl-0.5 space-x-1 pt-4 rounded-full">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`transition-all h-2 ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-primary-200"} rounded-full`}
              />
            ))}
          </div> */}
          <div className="items-center justify-between md:flex hidden">
            <CarouselGamePrevious className="bg-white hover:bg-greyscale-700/20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 cursor-pointer" />
            <CarouselGameNext className="bg-white hover:bg-greyscale-700/20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 cursor-pointer" />
          </div>
        </CarouselGameContext.Provider>
      </>
    )
  }
)
CarouselGame.displayName = "CarouselGame"

const CarouselGameContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarouselGame()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselGameContent.displayName = "CarouselGameContent"

const CarouselGameItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarouselGame()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselGameItem.displayName = "CarouselGameItem"

const CarouselGamePrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarouselGame()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute border-none h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeftIcon className="h-6 w-6 text-white text-lg font-plus-jakarta-sans-bold" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselGamePrevious.displayName = "CarouselGamePrevious"

const CarouselGameNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarouselGame()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute border-none h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRightIcon className="h-6 w-6 text-white text-lg font-plus-jakarta-sans-bold" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselGameNext.displayName = "CarouselGameNext"

export {
  type CarouselGameApi,
  CarouselGame,
  CarouselGameContent,
  CarouselGameItem,
  CarouselGamePrevious,
  CarouselGameNext,
}
