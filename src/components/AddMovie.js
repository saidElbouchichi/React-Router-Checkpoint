import { useState } from 'react';

const empty = { title: '', description: '', posterURL: '', trailer: '', rating: 3 };

function AddMovie({ onAdd }) {
  const [form, setForm] = useState(empty);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd(form);
    setForm(empty);
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <h2>Ajouter un film</h2>
      <input name="title" placeholder="Titre" value={form.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="posterURL" placeholder="URL de l'affiche" value={form.posterURL} onChange={handleChange} />
      <input name="trailer" placeholder="Lien de la bande-annonce (embed)" value={form.trailer} onChange={handleChange} />
      <select name="rating" value={form.rating} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}★</option>
        ))}
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddMovie;
