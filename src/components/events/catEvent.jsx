import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Event in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            key={ev.id}
            className="card"
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image src={ev.image} width={300} height={300} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
