import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'


const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, index, onClick}) => (

<div className={`card ${feedback}`} onClick={ () => onClick(index)}>
{/* on envoie index suite au click */}

    <span className="symbol">
        { feedback === 'hidden' ? HIDDEN_SYMBOL : card }
        {/*
            feedback = expr ternaire: si hidden alors hidden_symbol sinon card
            onClick = props, onClick dans div = natif
            on appelle la props et on lance onClick="" = runs a script when clicked,
            renvoie 'card' en param
        */}
    </span>
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf( [
        'hidden',
        'justMatched',
        'justMissMatched',
        'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

    // combinateur  oneOf  , qui fonctionne comme énumération, en limitant les valeurs à une série précise.
}
export default Card


/*

C'est désormais l’index de la carte, et non son symbole (avant->)onClick={ () => onClick(card)}
//ambigu car présent deux fois), qui nous intéresse. Il faut donc commencer par fournir cette information au composant  <Card/>  :

*/