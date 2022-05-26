import { onDelete, getName, getSize, getType, getUrl } from "../services/files";

import { MdDelete } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

import styles from "./table.module.css";

export const Table = ({ files }) => {
  if (!files?.length > 0)
    return (
      <h3 className={styles.noData}>
        No data yet. Go ahead and upload a file!
      </h3>
    );
  return (
    <table cellSpacing="0" cellPadding="0" className={styles.table}>
      <tr>
        <th>
          <h2>File name</h2>
        </th>
        <th>
          <h2>Type</h2>
        </th>
        <th>
          <h2>Size</h2>
        </th>
      </tr>

      {files?.map((file) => (
        <tr>
          <td>
            <p>{getName(file)}</p>
          </td>
          <td>
            <p>{getType(file)}</p>
          </td>
          <td>
            <p>{getSize(file)}</p>
          </td>
          <td>
            <MdDelete
              onClick={() => onDelete(file.id)}
              className={styles.icons}
            />
          </td>
          <td>
            <a href={getUrl(file)}>
              <BiLinkExternal className={styles.icons} />
            </a>
          </td>
        </tr>
      ))}
    </table>
  );
};
