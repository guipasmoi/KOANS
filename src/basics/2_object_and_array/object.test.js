describe("About Objects", function() {
  it("Javascript Object (JSO) are an extension of JSON", () => {
    var JSONExample = {
      team: "burton",
      members: ["me", "others"]
    };
    expect(typeof JSONExample).toBe("TODO REPLACEME");
  });
  it("You can access/assign property using `.` or '[somevalue]'", () => {
    const JSONExample = {
      team: "burton",
      members: ["me", "others"],
      " tricky property ": 42
    };
    expect(JSONExample.team).toBe("TODO REPLACEME");
    expect(JSONExample.members[0]).toBe("TODO REPLACEME");
    expect(JSONExample.members[1]).toBe("TODO REPLACEME");
    expect(JSONExample.members[1]).toBe("TODO REPLACEME");
    const assignMe0 = "TODO REPLACEME";
    expect(JSONExample[assignMe0]).toBe(42);
  });
  it("Array are just special object", () => {
    const JSONArray = [1, 2, 3, 4];
    const JSONExample = {
      team: "burton",
      members: ["me", "others"],
      " tricky property ": 42
    };
    expect(typeof JSONArray).toBe("TODO REPLACEME");
    expect(JSONArray[0]).toBe("TODO REPLACEME");
    expect(JSONArray[1]).toBe("TODO REPLACEME");
    expect(Array.isArray(JSONArray)).toBe("TODO REPLACEME");
    expect(Array.isArray(JSONExample)).toBe("TODO REPLACEME");
  });
});
