<<<<<<< HEAD
const BaseUrl = "https://localhost:7144/Arid/page";
=======
const BaseUrl = "https://localhost:5173/Arid/page";
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f

export default {
  async allPages(context) {
    const response = await fetch(BaseUrl);
    const responseData = await response.json();

    if (!response.ok) {
<<<<<<< HEAD
=======
      console.log(response);
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f

      const error = new Error(responseData.message || "failed to get category");

      throw error;
    }
<<<<<<< HEAD
=======
    console.log(response);
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f

    const pages = [];
    responseData.forEach((element) => {
      pages.push(element);
    });

    context.commit("setPages", pages);
  },
  async addPage(_, paylaod) {
    const response = await fetch(BaseUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylaod),
    });

    if (!response.ok) {
<<<<<<< HEAD
      const error = "failed to send data";
      throw error;
    }
  },
  async editPage(_, paylaod) {
    const response = await fetch(`${BaseUrl}/${paylaod.id}`, {
=======
      console.log(response);

      const error = "failed to send data";
      throw error;
    }
    console.log(response);
  },
  async editPage(_, paylaod) {
    const response = await fetch(BaseUrl, {
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylaod),
    });

    if (!response.ok) {
<<<<<<< HEAD
=======
      console.log(response);
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f

      const error = "failed to send data";
      throw error;
    }
<<<<<<< HEAD
  },
  async deletePage(_, paylaod) {
    const response = await fetch(`${BaseUrl}/${paylaod}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = "failed to send data";
      throw error;
    }
=======
    console.log(response);
  },
  async deletePage(_, paylaod) {
    const response = await fetch(`${BaseUrl}/${paylaod}`);

    if (!response.ok) {
      console.log(response);
      const error = "failed to send data";
      throw error;
    }
    console.log(response);
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
  },
};
