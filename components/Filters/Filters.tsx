'use client';

import { useCamperStore } from '@/lib/stores/useCamperStore';

const Filters = () => {
  const { setFilters } = useCamperStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;

    const { name, value, type } = target;
    const patch =
      type === 'checkbox'
        ? { [name]: (target as HTMLInputElement).checked }
        : { [name]: value };

    setFilters(patch);
  };

  return (
    <form>
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
      />

      <fieldset>
        <legend>Vehicle Type</legend>
        <label>
          <input
            type="radio"
            name="form"
            value="panelTruck"
            onChange={handleChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="integrated"
            onChange={handleChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            onChange={handleChange}
          />
          Alcove
        </label>
      </fieldset>

      <fieldset>
        <legend>Vehicle Equipment</legend>
        <label>
          <input type="checkbox" name="AC" onChange={handleChange} />
          AC
        </label>
        <label>
          <input type="checkbox" name="kitchen" onChange={handleChange} />
          Kitchen
        </label>
        <label>
          <input type="checkbox" name="TV" onChange={handleChange} />
          TV
        </label>
        <label>
          <input type="checkbox" name="bathroom" onChange={handleChange} />
          Bathroom
        </label>
      </fieldset>
    </form>
  );
};

export default Filters;
