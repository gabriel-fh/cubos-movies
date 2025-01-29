type RatingProps = {
  voteAverage: number
  variant?: 'primary' | 'secondary'
}

const Rating = ({ voteAverage, variant = 'primary' }: RatingProps) => {
  const percentage = Math.round(((voteAverage ?? 0) / 10) * 100);
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  const primary = 'group-hover:block absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '

  return (
    <div className={`rounded-full backdrop-filter backdrop-blur-[3px] bg-black/30 
      ${variant === 'primary' && primary}`}
    >
      <svg
        className={variant === 'primary' ? 'w-24 sm:w-28 md:w-32 xl:w-36' : 'w-[90px]'}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={"rgba(255, 255, 255, 27%)"}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={"#FFE000"}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0"
          strokeLinecap="round"
          className="bg-yellow-9"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end">
        <span
          className={`text-[#FFE000] font-bold text-3xl md:text-4xl 
            ${variant === 'secondary' && 'text-xl'}`
          }>
          {percentage}
        </span>
        <span className={`text-white font-bold text-xl md:text-2xl ${variant === 'secondary' && '!text-base'}`}>%</span>
      </div>
    </div>
  )
}

export default Rating