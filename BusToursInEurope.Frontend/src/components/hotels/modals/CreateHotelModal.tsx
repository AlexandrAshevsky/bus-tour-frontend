import React, { useState } from 'react';
import { Modal } from '../../../ui/Modal';
import { Input } from '../../../ui/Input';
import { Button } from '../../../ui/Button';
import { createHotel } from '../../../queries/hotels';
import { HotelDto } from '../../../types/Hotels';

interface CreateHotelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  cityId: number;
}

export const CreateHotelModal: React.FC<CreateHotelModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  cityId
}) => {
  const [formData, setFormData] = useState<Omit<HotelDto, 'id'>>({
    name: '',
    rating: 0,
    cityDtoId: cityId
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createHotel({ ...formData, id: 0 });
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error('Failed to create hotel:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Hotel">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Hotel Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Rating"
          type="number"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
          required
          min={0}
          max={5}
          step={0.1}
        />
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            Create Hotel
          </Button>
        </div>
      </form>
    </Modal>
  );
};