import React from 'react'
import { Svg } from './styles'

export const Logo = props => (
  <Svg
    width={552.695}
    height={122.021}
    viewBox="-26.348 13.989 552.695 122.021"
    style={{
      background: '0 0',
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter id="prefix__editing-extrude-glow">
        <feFlood floodColor="#333" result="flood-1" />
        <feMorphology radius={1} in="SourceAlpha" result="erode" />
        <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
        <feConvolveMatrix
          order="3,3"
          divisor={1}
          in="comp1"
          result="convolve"
          kernelMatrix="0 0 0 1 1 1 0 0 0"
        />
        <feOffset dx={-3} in="convolve" result="extrude" />
        <feComposite
          operator="in"
          in="flood-1"
          in2="extrude"
          result="comp-extrude"
        />
        <feFlood floodColor="#000" result="flood-2" />
        <feComposite
          operator="in"
          in="flood-2"
          in2="SourceAlpha"
          result="comp2"
        />
        <feMorphology operator="dilate" radius={1} in="comp2" result="dilate" />
        <feOffset dx={-4.5} in="dilate" result="offset" />
        <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
        <feComponentTransfer in="blur" result="shadow">
          <feFuncA type="linear" slope={0.8} intercept={-0.2} />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="comp-extrude" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M28.42-9.86q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51Q7.74-.32 5.63-.32q-2.11 0-2.94.1Q1.86-.13.51 0l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2H30.4q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83L15.55-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08zM81.6 1.28q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.44-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L65.6 0 53.12 1.28l3.46-17.41q.57-2.88 1.08-6.14.52-3.27.52-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L46.53 0 33.92 1.28l6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.55 1.34 1.79 1.35 2.36 3.52 1.09-2.24 3.88-3.55 2.78-1.31 6.2-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.87.9 2.15 1.02Q88.9-1.28 86.69 0q-2.21 1.28-5.09 1.28zm42.69-5.66q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47t-4.93-.64l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76q1.35 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.67-1.92 1.92-3.46 3.45-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.91 0-5.19 7.61zm39.3 18.82q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.91 20.22q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78zm34.94 23.56q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L166.27 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.72 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm39.23 7.16q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm25.73-8.96q2.17-3.07 5.47-5.12 3.29-2.05 7.33-2.05 4.03 0 5.95 1.28l12.54-1.28-4.35 24.58Q251.2 3.2 246.46 8.13q-4.54 4.67-13.37 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.99-1.51 5.06-1.51 2.69 0 4.73 1.22 1.22.64 1.8 1.54-1.48 1.28-1.48 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.71-2.75 1.28-5.51-2.88 3.52-9.4 3.52-4.55 0-7.17-2.17-2.63-2.18-2.63-7.3 0-3.2 1.09-6.81 1.09-3.62 3.27-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.53 0 3-1.67 1.16-1.34 1.6-3.33l3.27-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.91 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.5-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L272 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67zM379.9 1.28q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62L363.9 0l-12.48 1.28 3.46-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.49 6.66L344.83 0l-12.61 1.28 6.72-33.92 10.44-1.28-1.09 6.46q1.66-3.45 4.73-4.96 3.08-1.5 7.88-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z"
      fill="#eb6c6c"
      transform="translate(55.825 104.518)"
      filter="url(#prefix__editing-extrude-glow)"
    />
    <style />
  </Svg>
)