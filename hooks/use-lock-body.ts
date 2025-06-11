import * as React from "react"

// @see https://usehooks.com/useLockBodyScroll.
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    // 브라우저에게 HTML 문서의 <body> 태그에 실제 적용된 overflow 속성 값을 계산해서 알려줘
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow

    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}


