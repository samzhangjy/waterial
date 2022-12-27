import { addAlpha, interactionStates, lightTheme } from "@waterial/base";
import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  TouchEvent,
  TouchEventHandler,
  useEffect,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";

const rippleEffect = (props: { size: number }) => keyframes`
  0% {
    transform: scale3d(1, 1, 1);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  60% {
    transform: scale3d(
      ${props.size},
      ${props.size},
      ${props.size}
    );
  }

  100% {
    opacity: 0;
    transform: scale3d(
      ${props.size},
      ${props.size},
      ${props.size}
    );
  }
`;

const Ripple = styled.div<{
  x: number;
  y: number;
  isHolding: boolean;
  size: number;
  color: string;
  circleSize: number;
}>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  height: ${(props) => props.circleSize}px;
  width: ${(props) => props.circleSize}px;
  background: ${(props) => addAlpha(props.color, interactionStates.press)};
  border-radius: 50%;
  opacity: 0.3;
  animation-name: ${(props) => rippleEffect({ size: props.size })};
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  pointer-events: none;
  animation-play-state: ${(props) => (props.isHolding ? "paused" : "")};
  transition: all 0.2s;
`;

Ripple.defaultProps = {
  theme: lightTheme,
  circleSize: 10,
};

type IRipple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

/**
 * Create a ripple effect on given component props.
 *
 * Pass a component props object and returns a modified version of it.
 *
 * Usage:
 *
 * ```tsx
 * const [props, ripples] = useRipple({ props: componentProps, color: "red" });
 * return (
 *   <Component {...props}>
 *     ...children...
 *     {ripples}
 *   </Component>
 * );
 * ```
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useRipple = <T extends { [key: string]: any }>({
  props,
  circleSize = 10,
  color,
}: {
  circleSize?: number;
  color: string;
  props: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): [{ [key: string]: any }, ReactNode[]] => {
  const [ripples, setRipples] = useState<IRipple[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [pause, setPause] = useState(false);
  const { onMouseDownCapture, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd, ...rest } = props;

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!pause) return;
    const timer = setTimeout(() => setIsHolding(true), 200);
    return () => clearTimeout(timer);
  }, [pause]);

  const isTouch = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ): e is TouchEvent<HTMLButtonElement> => "touches" in e;

  const getRippleSize = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
    rect: DOMRect
  ) => {
    const WIDTH = rect.width;
    const HEIGHT = rect.height;

    const clientX = isTouch(e) ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch(e) ? e.touches[0].clientY : e.clientY;

    const halfY = HEIGHT / 2;
    const halfX = WIDTH / 2;

    const cursorPosY = (clientY - rect.y) / halfY;
    const cursorPosX = (clientX - rect.left) / halfX;

    const diffY = Math.abs(cursorPosY - 1) + 1;
    const diffX = Math.abs(cursorPosX - 1) + 1;

    const MAX_SIZE = WIDTH >= HEIGHT ? WIDTH : HEIGHT;

    const MAX_CURSOR_POS = diffX >= diffY ? diffX : diffY;

    const rippleScale = (MAX_SIZE * 1.3 * MAX_CURSOR_POS) / 10;

    return rippleScale;
  };

  const addRipple = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
    const id = Math.random();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

    setRipples((ripples) => [
      ...ripples,
      {
        id,
        x: isTouch(event)
          ? event.touches[0].clientX - rect.left - 4
          : event.clientX - rect.left - circleSize / 2,
        y: isTouch(event)
          ? event.touches[0].clientY - rect.y - 4
          : event.clientY - rect.top - circleSize / 2,
        size: getRippleSize(event, rect),
      },
    ]);

    setTimeout(() => removeRipple(), 600);
  };

  const removeRipple = () => {
    setRipples((ripples) => ripples.filter((e) => e.id !== ripples[0].id));
  };

  const handleMouseDownCapture: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isMobile) return;
    event.preventDefault();
    addRipple(event);

    setPause(true);
    onMouseDownCapture && onMouseDownCapture(event);
  };

  const handleMouseUp: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isMobile) return;
    setIsHolding(false);
    setPause(false);
    onMouseUp && onMouseUp(event);
  };

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isMobile) return;
    setIsHolding(false);
    setPause(false);
    onMouseLeave && onMouseLeave(event);
  };

  const handleTouchStart: TouchEventHandler<HTMLButtonElement> = (event) => {
    if (!isMobile) return;
    setPause(true);
    addRipple(event);
    onTouchStart && onTouchStart(event);
  };

  const handleTouchEnd: TouchEventHandler<HTMLButtonElement> = (event) => {
    if (!isMobile) return;
    setIsHolding(false);
    setPause(false);
    onTouchEnd && onTouchEnd(event);
  };

  return [
    {
      onMouseDownCapture: handleMouseDownCapture,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      ...rest,
    },
    ripples.map((ripple: IRipple) => (
      <Ripple
        key={ripple.id}
        x={ripple.x}
        y={ripple.y}
        isHolding={isHolding}
        size={ripple.size}
        color={color}
        circleSize={circleSize}
      />
    )),
  ];
};

export default useRipple;
