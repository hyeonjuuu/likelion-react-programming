function Spinner({
  size = 200,
  message = '로딩중..',
  colors = ['#e90c59', '#46dff0', '#e90c59'],
}) {
  return (
    <svg
      style={{ margin: 'auto', background: '#fff' }}
      width={size}
      height={size}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <title>{message}</title>
      <circle cx="30" cy="50" r="20" fill={colors[0]}>
        <animate
          attributeName="cx"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
      </circle>
      <circle cx="70" cy="50" r="20" fill={colors[1]}>
        <animate
          attributeName="cx"
          begin="0s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
      </circle>
      <circle cx="30" cy="50" r="20" fill={colors[2]}>
        <animate
          attributeName="cx"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
        <animate
          attributeName="fill-opacity"
          calcMode="discrete"
          dur="1s"
          keyTimes="0;0.499;0.5;1"
          repeatCount="indefinite"
          values="0;0;1;1"
        ></animate>
      </circle>
    </svg>
  );
}

export default Spinner;
