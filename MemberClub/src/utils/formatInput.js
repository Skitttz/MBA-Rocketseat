export function formatInputValue(
  value,
  maxNumerics,
  maxLengthGroup,
  separator,
) {
  value = value.replace(/[^0-9]/g, '');
  value = value.slice(0, maxNumerics);
  const formattedInputValue =
    value.match(new RegExp(`.{1,${maxLengthGroup}}`, 'g'))?.join(separator) ||
    '';
  return formattedInputValue;
}
