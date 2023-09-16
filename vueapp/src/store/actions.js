const BaseUrl = "https://localhost:7144/Arid/page";

export default {
  async allPages(context) {
    const response = await fetch(BaseUrl);
    const responseData = await response.json();

    if (!response.ok) {

      const error = new Error(responseData.message || "failed to get category");

      throw error;
    }

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
      const error = "failed to send data";
      throw error;
    }
  },
  async editPage(_, paylaod) {
    const response = await fetch(`${BaseUrl}/${paylaod.id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylaod),
    });

    if (!response.ok) {

      const error = "failed to send data";
      throw error;
    }
  },
  async deletePage(_, paylaod) {
    const response = await fetch(`${BaseUrl}/${paylaod}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = "failed to send data";
      throw error;
    }
  },
};
