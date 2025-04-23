import React, { useState } from 'react';
import { Modal } from '../../../ui/Modal';
import { Input } from '../../../ui/Input';
import { Button } from '../../../ui/Button';
import { createBus } from '../../../queries/buses';
import { BusDto } from '../../../types/Buses';

interface CreateBusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const CreateBusModal: React.FC<CreateBusModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState<Omit<BusDto, 'id'>>({
    name: '',
    numOfSeats: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBus({ ...formData, id: 0 });
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error('Failed to create bus:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Bus">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Bus Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Number of Seats"
          type="number"
          value={formData.numOfSeats}
          onChange={(e) => setFormData({ ...formData, numOfSeats: parseInt(e.target.value) })}
          required
          min={1}
        />
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            Create Bus
          </Button>
        </div>
      </form>
    </Modal>
  );
};