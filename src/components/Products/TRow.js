function TRow({id ,cat, market, amount, tel, location, tovar, desc, price, state, edit, delate}) {
  return (
    <tr>
      {
        id && <td colSpan="1">{id}</td>
      }
      {
        cat && <td colSpan="1">{cat}</td>
      }
      {
        market && <td colSpan="1">{market}</td>
      }
      {
        amount && <td colSpan="1">{amount}</td>
      }
      {
        tel && <td colSpan="1">{tel}</td>
      }
      {
        location && <td colSpan="1">{location}</td>
      }
      {
        tovar && <td colSpan="1">{tovar}</td>
      }
      {
        desc && <td colSpan="1">{desc}</td>
      }
      {
        price && <td colSpan="1">{price}</td>
      }
      {
        state && (
        <td colSpan="1">
          <button className={`state state--${state}`}>{state}</button>
        </td>
        )
      }
      {
        edit && (
        <td colSpan="1">
          <button className="edit" aria-label={edit}></button>
        </td>
        )
      }
      {
        delate && (
          <td colSpan="1">
          <button className="delate" aria-label={delate}></button>
        </td>
        )
      }
    </tr>
  );
}
export default TRow
