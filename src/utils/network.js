

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("could not get", res.status);
      return false;
    }
    return res.json();
  } catch (error) {
    console.error(error.mesage);
  }
};

 