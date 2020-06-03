import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const Collaborateur = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      Collaborateur: allAirtable(
        filter: { table: { eq: "Collaborateur" } }
        sort: { fields: data___Nom, order: DESC }
      ) {
        nodes {
          data {
            Nom
            Rôle
            AdresseMail
          }
          recordId
        }
      }
    }
  `);

  return (
    <div>
      <h3>Collaborateur</h3>

      <ul>
        {data.Collaborateur.nodes.map((item, i) => (
          <li key={item.recordId}>
            <p>
              {item.data.Nom}, ${item.data.Rôle}
            </p>
            <p>{item.data.AdresseMail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborateur;