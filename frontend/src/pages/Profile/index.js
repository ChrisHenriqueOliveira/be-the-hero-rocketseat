import React from 'react'
import { Link } from 'react-router-dom';

import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    return ( 
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/profile/newincident">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}