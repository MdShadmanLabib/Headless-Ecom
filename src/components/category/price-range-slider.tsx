"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { formatPrice } from "@/utils/format";
import { cn } from "@/utils/cn";

interface PriceRangeSliderInnerProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  onChange: (min?: number, max?: number) => void;
  className?: string;
}

function PriceRangeSliderInner({
  min,
  max,
  initialMin,
  initialMax,
  onChange,
  className,
}: PriceRangeSliderInnerProps) {
  const [localMin, setLocalMin] = useState(initialMin);
  const [localMax, setLocalMax] = useState(initialMax);

  const debouncedMin = useDebounce(localMin, 400);
  const debouncedMax = useDebounce(localMax, 400);
  const lastApplied = useRef({ min: initialMin, max: initialMax });

  useEffect(() => {
    if (
      debouncedMin !== lastApplied.current.min ||
      debouncedMax !== lastApplied.current.max
    ) {
      lastApplied.current = { min: debouncedMin, max: debouncedMax };
      onChange(
        debouncedMin === min ? undefined : debouncedMin,
        debouncedMax === max ? undefined : debouncedMax,
      );
    }
  }, [debouncedMin, debouncedMax, min, max, onChange]);

  const range = max - min || 1;
  const leftPercent = ((localMin - min) / range) * 100;
  const rightPercent = ((localMax - min) / range) * 100;

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Number(e.target.value), localMax - 1000);
      setLocalMin(value);
    },
    [localMax],
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(e.target.value), localMin + 1000);
      setLocalMax(value);
    },
    [localMin],
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between text-caption text-text-secondary">
        <span>{formatPrice(localMin)}</span>
        <span>{formatPrice(localMax)}</span>
      </div>

      <div className="relative h-6">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-border-primary" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent"
          style={{
            left: `${leftPercent}%`,
            width: `${rightPercent - leftPercent}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={localMin}
          onChange={handleMinChange}
          className="price-range-thumb absolute top-0 h-6 w-full appearance-none bg-transparent"
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={localMax}
          onChange={handleMaxChange}
          className="price-range-thumb absolute top-0 h-6 w-full appearance-none bg-transparent"
          aria-label="Maximum price"
        />
      </div>

      <style jsx>{`
        .price-range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          cursor: pointer;
          border: 2px solid #0a0a0f;
          position: relative;
          z-index: 10;
          pointer-events: all;
        }
        .price-range-thumb::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          cursor: pointer;
          border: 2px solid #0a0a0f;
          position: relative;
          z-index: 10;
          pointer-events: all;
        }
        .price-range-thumb {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

interface PriceRangeSliderProps {
  min: number;
  max: number;
  currentMin?: number;
  currentMax?: number;
  onChange: (min?: number, max?: number) => void;
  className?: string;
}

export function PriceRangeSlider({
  min,
  max,
  currentMin,
  currentMax,
  onChange,
  className,
}: PriceRangeSliderProps) {
  const resetKey = useMemo(
    () => `${currentMin ?? min}-${currentMax ?? max}`,
    [currentMin, currentMax, min, max],
  );

  return (
    <PriceRangeSliderInner
      key={resetKey}
      min={min}
      max={max}
      initialMin={currentMin ?? min}
      initialMax={currentMax ?? max}
      onChange={onChange}
      className={className}
    />
  );
}
