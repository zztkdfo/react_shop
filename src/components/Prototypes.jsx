// components/Prototypes.jsx

import useGetItemList from './../hooks/useGetItemList'

export default function Prototypes() {
  const items= useGetItemList()
  return (
    <main>
      <div className="prototypes">
        {items.map((item) => {
          const {id, thumbnail, title, price, desc,pieUrl} = item
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    style={{
                      objectFit: "contain",
                    }}
                    src={thumbnail}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i className="icon icon--plus" />
                  </div>

                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
