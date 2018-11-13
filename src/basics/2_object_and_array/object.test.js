describe("About Objects", function() {
  it("Javascript Object (JSO) are an extension of JSON", () => {
    var JSONExample = {
      team: "burton",
      members: ["me", "others"]
    };
    expect(typeof JSONExample).toBe("object");
  });
  it("You can access/assign property using `.` or '[somevalue]'", () => {
    const JSONExample = {
      team: "burton",
      members: ["me", "others"],
      " tricky property ": 42
    };
    expect(JSONExample.team).toBe("burton");
    expect(JSONExample.members[0]).toBe("me");
    expect(JSONExample.members[1]).toBe("others");
    expect(JSONExample.members[1]).toBe("others");
    const assignMe0 = " tricky property ";
    expect(JSONExample[assignMe0]).toBe(42);
  });
  it("Array are just special object", () => {
    const JSONArray = [1, 2, 3, 4];
    const JSONExample = {
      team: "burton",
      members: ["me", "others"],
      " tricky property ": 42
    };
    expect(typeof JSONArray).toBe("Object");
    expect(JSONArray[0]).toBe(1);
    expect(JSONArray[1]).toBe(2);
    expect(Array.isArray(JSONArray)).toBe(true);
    expect(Array.isArray(JSONExample)).toBe(false);
  });
});
