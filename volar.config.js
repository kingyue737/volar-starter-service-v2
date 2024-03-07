console.log("print something");

module.exports = {
  // services: [require("volar-service-prettyhtml").create({ printWidth: 10 })],
  services: [
    require("volar-service-prettyhtml").create({
      getFormattingOptions() {
        return { printWidth: 10 };
      },
    }),
  ],
};
