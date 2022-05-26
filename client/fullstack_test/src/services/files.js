export const API_ENDPOINT = "http://127.0.0.1:8000/backend_app/files/";

export const onDrop = async (acceptedFiles) => {
  if (acceptedFiles.length === 0) return;

  let formData = new FormData();
  formData.append("data_file", acceptedFiles[0]);
  await fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  });
  window.location.reload();
};

export const onDelete = async (id) => {
  await fetch(API_ENDPOINT + id, {
    method: "DELETE",
  });
  window.location.reload();
};

export const getName = (file) =>
  file.data_file?.name.split("/")[1].split(".")[0];

export const getType = (file) =>
  file.data_file?.name.split("/")[1].split(".")[1];

export const getSize = (file) => bytesToSize(file.data_file?.size);

export const getUrl = (file) => file.data_file?.url;

//https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
const bytesToSize = (bytes) => {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};
