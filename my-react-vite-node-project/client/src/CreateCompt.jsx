import React, { useState } from "react";
import "./CreateCompt.css";

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    accepterConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    alert("Inscription réussie !");
    console.log(formData);
  };

  return (
    <div className="inscription-container">
      <h1><i>Inscription</i></h1>
      <form onSubmit={handleSubmit}>
        <label>Prénom</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />

        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Téléphone</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          required
        />

        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          name="confirmerMotDePasse"
          value={formData.confirmerMotDePasse}
          onChange={handleChange}
          required
        />


        {/* <button type="submit">S'inscrire</button> */}
        <input id="submit" type="submit" value={"S'inscrire"}/>
      </form>
    </div>
  );
};

export default InscriptionForm;