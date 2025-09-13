import { toast } from 'vue-sonner';

function showSuccess(message: string, duration?: number) {
  toast.success(message, {
    duration,
    style: {
      border: '1px solid green',
      color: 'green',
    },
  });
}

function showError(message: string, duration?: number) {
  toast.error(message, {
    duration,
    style: {
      border: '1px solid red',
      color: 'red',
    },
  });
}

export function useToast() {
  return {
    showSuccess,
    showError,
  };
}
