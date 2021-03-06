import { useNProgress } from '@tanem/react-nprogress'

const Container = ({ animationDuration, children, isFinished }) => (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`
      }}
    >
      {children}
    </div>
  )

  const Bar = ({ animationDuration, progress }) => (
    <div
      style={{
        background: '#29d',
        height: 3,
        left: 0,
        marginLeft: `${(-1 + progress) * 100}%`,
        position: 'fixed',
        top: 0,
        transition: `margin-left ${animationDuration}ms linear`,
        width: '100%',
        zIndex: 1031
      }}
    >
      <div
        style={{
          boxShadow: '0 0 10px #29d, 0 0 5px #29d',
          display: 'block',
          height: '100%',
          opacity: 1,
          position: 'absolute',
          right: 0,
          transform: 'rotate(3deg) translate(0px, -4px)',
          width: 100
        }}
      />
    </div>
  )

  const Spinner = () => (
    <div
      style={{
        display: 'block',
        position: 'fixed',
        right: 15,
        top: 15,
        zIndex: 1031
      }}
    >
      <div
        style={{
          animation: 'spinner 600ms linear infinite',
          borderBottom: '2px solid transparent',
          borderLeft: '2px solid #29d',
          borderRadius: '50%',
          borderRight: '2px solid transparent',
          borderTop: '2px solid #29d',
          boxSizing: 'border-box',
          height: 18,
          width: 18
        }}
      />
    </div>
  )

  const ProgressBar = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
      isAnimating,
    })

    return (
      <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
        <Spinner />
      </Container>
    )
  }

export default ProgressBar;