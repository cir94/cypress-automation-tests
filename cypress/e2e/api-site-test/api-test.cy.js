context('Test API', () => {
  it('should get a bed of data from given value', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      // console.log(response.body);
      expect(response.body.data).length.to.be.greaterThan(1);
      expect(response.body.data[0].email).to.equal('michael.lawson@reqres.in');
      console.log(response.body.data);
    });
  });
});
