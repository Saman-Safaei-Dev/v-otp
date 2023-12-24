const convertStringValueToAValidOtpValue = (value: string, fields: number): string[] => {
  const trimmedValueLength = value.split('').length

  if (!trimmedValueLength) {
    return Array.from({ length: fields }).fill('') as string[]
  }

  if (trimmedValueLength > fields) {
    return value.split('').slice(-1 * fields)
  }

  if (trimmedValueLength < fields) {
    return value
      .split('')
      .concat(Array.from({ length: fields - trimmedValueLength }).fill('') as string[])
  }
  
  return value.split('')
}

const isValidNumber = (value: string) => /^[0-9]*$/.test(value)

export { convertStringValueToAValidOtpValue, isValidNumber }
