import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CircleProgressProps {
  inView: boolean;
  Icon: string;
}

const size = 56;
const strokeWidth = 2;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

function CircleProgress({ inView, Icon }: Readonly<CircleProgressProps>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [inView]);

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#00000014"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#0381FF"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (progress / 100) * circumference,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>

      <div className="path-icon-wrapper z-10 flex items-center justify-center bg-white rounded-full w-[calc(100%-4px)] h-[calc(100%-4px)]">
        <Icon />
      </div>
    </div>
  );
}

export default CircleProgress;
