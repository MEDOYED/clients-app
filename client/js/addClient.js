import { createClientsForm } from "./createModalForm.js"

export const addClientModal = () => {
  const createForm = createClientsForm();
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');

  modal.classList.add('modal', 'site-modal', 'modal-active');
  modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
  createForm.form.classList.add('add-client');

  modal.append(modalContent);
  modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);

  return modal;
}