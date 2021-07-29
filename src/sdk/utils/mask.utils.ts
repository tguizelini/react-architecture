export function cpfMask(value?: any) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, '$1.$2.$3/$4-$5');
};

export const resolveDocumentMask = (document?: string) => {
  if (document) {
    if (document.replace(/\D/g, '').length === 11) {
      return cpfMask(document);
    } else {
      return cnpjMask(document);
    }
  }
  return '';
};

export const unmaskNumberFields = (value = ''): string => value.replace(/\D/gim, '');
