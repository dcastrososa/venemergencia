import React, { useState } from "react";
import { Modal } from "antd";

export const ModalError = ({ visible, error, onOk, onCancel }) => {
  return (
    <Modal visible={visible} onOk={onOk} onCancel={onCancel}>
      <div>{error}</div>
    </Modal>
  );
};
