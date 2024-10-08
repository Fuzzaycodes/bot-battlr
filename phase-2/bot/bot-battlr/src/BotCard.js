import React from 'react';

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {handleDelete && (
        <button onClick={(e) => { e.stopPropagation(); handleDelete(); }} style={{ color: 'red' }}>
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
