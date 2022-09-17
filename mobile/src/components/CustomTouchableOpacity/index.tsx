import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function CustomTouchableOpacity({
  children,
  ...rest
}: CustomTouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  );
}
