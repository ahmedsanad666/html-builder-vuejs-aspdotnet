const BaseUrl = "https://localhost:5173/Arid/page";

export default {
  async allPages(context) {
    const response = await fetch(BaseUrl);
    const responseData = await response.json();

    if (!response.ok) {
      console.log(response);

      const error = new Error(responseData.message || "failed to get category");

      throw error;
    }
    console.log(response);

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
      console.log(response);

      const error = "failed to send data";
      throw error;
    }
    console.log(response);
  },
  async editPage(_, paylaod) {
    const response = await fetch(BaseUrl, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylaod),
    });

    if (!response.ok) {
      console.log(response);

      const error = "failed to send data";
      throw error;
    }
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
  },
};
