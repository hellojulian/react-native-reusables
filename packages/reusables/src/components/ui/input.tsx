import * as React from 'react';
import { TextInput, View, Text, type TextInputProps, StyleSheet } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const styles = StyleSheet.create({
  Inter: {
    fontFamily: 'Inter',
  },
});

const inputVariants = cva(
  'web:flex h-10 native:h-12 web:w-full rounded-md border bg-background px-3 web:py-2 text-md lg:text-md native:text-md native:leading-[1.25] text-sys-text-body web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-offset-2',
  {
    variants: {
      state: {
        default: 'border-sys-border-4 bg-sys-surface-neutral-0 placeholder:text-sys-text-neutral-3',
        active:
          'border-2 border-sys-border-6 bg-sys-surface-secondary-pressed text-sys-text-body placeholder:text-sys-text-secondary',
        error:
          'border-sys-border-error border-2 bg-sys-error-container text-sys-text-body placeholder:text-sys-error',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

interface InputProps extends TextInputProps, VariantProps<typeof inputVariants> {
  error?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, placeholderClassName, state, error, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const inputState = error ? 'error' : isFocused ? 'active' : state;

    return (
      <View>
        <TextInput
          ref={ref}
          className={cn(
            inputVariants({ state: inputState }),
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
            className
          )}
          placeholderClassName={cn(
            inputState === 'error'
              ? 'text-sys-fn-error-text'
              : inputState === 'active'
              ? 'text-sys-text-secondary'
              : 'text-sys-text-secondary',
            placeholderClassName
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus && props.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur && props.onBlur(e);
          }}
          style={[
            styles.Inter,
            {
              textAlignVertical: 'center',
            },
            style,
          ]}
          {...props}
        />
        {error && (
          <Text style={styles.Inter} className='mt-1 text-base text-sys-fn-error-text'>
            {error}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
