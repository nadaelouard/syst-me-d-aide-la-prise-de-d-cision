import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDataForm, setShowDataForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdaptive] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sexe: '',
    age: '',
    NiveauEducation: '',
    institutionType: '',
    EtudiantInformatique: '',
    Location: '',
    Délestage: '',
    Conditionfinancière: '',
    TypeInternet: '',
    TypeRéseau: '',
    SelfLms: '',
    Appareil: '',
    NiveauAdaptabilité: '',
  });

  const handleContactClick = () => {
    setShowLogin(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowDataForm(true);
  };

  const handleDataFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDataFormSubmit = async (e) => {
    e.preventDefault();
    const adaptativeConditionsMet = 
      formData.EtudiantInformatique === 'Yes' &&
      formData.TypeInternet === 'Wifi' &&
      formData.SelfLms === 'Yes' &&
      formData.TypeRéseau === '4G' &&
      formData.Appareil === 'Computer';

    if (adaptativeConditionsMet) {
      navigate('/adaptive-description');
    } else {
      navigate('/advice');
    }
  };
  
  return (
    <div className="contact-page">
      <h2>Contact Page</h2>
      {showLogin && !showDataForm && (
        <div className="login-section">
          <h2>Login</h2>
          <form onSubmit={handleLoginFormSubmit}>
            <div className="login">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="login">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit" className="login-bt">Connexion</button>
           
          </form>
        </div>
      )}
      {showDataForm && (
        <div className="data-section">
          <h2>Formulaire d'étudiant</h2>
          <form onSubmit={handleDataFormSubmit}>
            <div className="form-group">
              <label>Sexe</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="sexe"
                    value="Girl"
                    checked={formData.sexe === 'Girl'}
                    onChange={handleDataFormChange}
                    required
                  />
                  Girl
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexe"
                    value="Boy"
                    checked={formData.sexe === 'Boy'}
                    onChange={handleDataFormChange}
                    required
                  />
                  Boy
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <select id="age" name="age" value={formData.age} onChange={handleDataFormChange} required>
                <option value="">  </option>
                <option value="[1-5]">[1-5]</option>
                <option value="[6-10]">[6-10]</option>
                <option value="[11-15]">[11-15]</option>
                <option value="[16-20]">[16-20]</option>
                <option value="[21-25]">[21-25]</option>
                <option value="[26-30]">[26-30]</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="NiveauEducation">Niveau d'éducation</label>
              <select id="NiveauEducation" name="NiveauEducation" value={formData.NiveauEducation} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="University">University</option>
                <option value="College">College</option>
                <option value="School">School</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="institutionType">Type d'établissement</label>
              <select id="institutionType" name="institutionType" value={formData.institutionType} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="form-group">
              <label>L'étudiant en informatique</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="EtudiantInformatique"
                    value="Yes"
                    checked={formData.EtudiantInformatique === 'Yes'}
                    onChange={handleDataFormChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="EtudiantInformatique"
                    value="No"
                    checked={formData.EtudiantInformatique === 'No'}
                    onChange={handleDataFormChange}
                    required
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Location</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="Location"
                    value="Yes"
                    checked={formData.Location === 'Yes'}
                    onChange={handleDataFormChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Location"
                    value="No"
                    checked={formData.Location === 'No'}
                    onChange={handleDataFormChange}
                    required
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Délestage">Délestage</label>
              <select id="Délestage" name="Délestage" value={formData.Délestage} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Conditionfinancière">Condition financière</label>
              <select id="Conditionfinancière" name="Conditionfinancière" value={formData.Conditionfinancière} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="Good">Good</option>
                <option value="Mid">Mid</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="TypeInternet">Type d'Internet</label>
              <select id="TypeInternet" name="TypeInternet" value={formData.TypeInternet} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="Wifi">Wifi</option>
                <option value="Mobile Data">Mobile Data</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="TypeRéseau">Type de réseau</label>
              <select id="TypeRéseau" name="TypeRéseau" value={formData.TypeRéseau} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="4G">4G</option>
                <option value="3G">3G</option>
                <option value="2G">2G</option>
              </select>
            </div>
            <div className="form-group">
              <label>Self LMS</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="SelfLms"
                    value="Yes"
                    checked={formData.SelfLms === 'Yes'}
                    onChange={handleDataFormChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="SelfLms"
                    value="No"
                    checked={formData.SelfLms === 'No'}
                    onChange={handleDataFormChange}
                    required
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Appareil</label>
              <select id="Appareil" name="Appareil" value={formData.Appareil} onChange={handleDataFormChange} required>
                <option value=""> </option>
                <option value="Computer">Computer</option>
                <option value="Tab">Tab</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
            <div className="form-group">
              <label>Niveau d'adaptabilité</label>
              <select id="NiveauAdaptabilité" name="NiveauAdaptabilité" value={formData.NiveauAdaptabilité} onChange={handleDataFormChange} required>
                <option value=""></option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <button type="submit" className="btn">Valider</button>
          </form>
        </div>
      )}
      {!showLogin && !showDataForm && isAdaptive === null && (
        <button onClick={handleContactClick} className="blo">Login</button>
      )}
      {isAdaptive === false && (
        <div className="result">
          <h2>Le système d'enseignement à distance n'est pas adaptatif pour l'élève.</h2>
        </div>
      )}
    </div>
  );
}

export default ContactPage;