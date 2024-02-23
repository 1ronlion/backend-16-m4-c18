import fetchData from "./countries";

test('Get average population from all european countries', () => {
	return fetchData().then((data: any) => {
		expect(data).toBe(14093096);
	});
});