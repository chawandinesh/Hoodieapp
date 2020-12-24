import DropdownManager from './DropdownManager';

export const TYPE = {
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

export function showAlert(type, title, description) {
  const ref = DropdownManager.getDefault();

  if (!!ref) {
    ref.alertWithType(type, title, description);
  }
}

export function hideAlert() {
  const ref = DropdownManager.getDefault();

  if (!!ref) {
    ref.closeAction();
  }
}
