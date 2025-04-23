import React, { useState } from 'react';
import { Modal } from '../../../ui/Modal';
import { Input } from '../../../ui/Input';
import { Button } from '../../../ui/Button';
import { createTour } from '../../../queries/tours';
import { CreateTourDto } from '../../../types/Tours';

interface CreateTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const CreateTourModal: React.FC<CreateTourModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState<CreateTourDto>({
    id: 0,
    name: '',
    price: 0,
    startDate: '',
    endDate: '',
    numOfSeats: 0,
    description: '',
    busDto: 0,
    routeBusDto: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTour(formData);
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error('Failed to create tour:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Tour">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Tour Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Price"
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
          required
          min={0}
        />
        <Input
          label="Start Date"
          type="datetime-local"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          required
        />
        <Input
          label="End Date"
          type="datetime-local"
          value={formData.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
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
        <Input
          label="Description"
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <Input
          label="Bus ID"
          type="number"
          value={formData.busDto}
          onChange={(e) => setFormData({ ...formData, busDto: parseInt(e.target.value) })}
          required
        />
        <Input
          label="Route ID"
          type="number"
          value={formData.routeBusDto}
          onChange={(e) => setFormData({ ...formData, routeBusDto: parseInt(e.target.value) })}
          required
        />
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            Create Tour
          </Button>
        </div>
      </form>
    </Modal>
  );
};