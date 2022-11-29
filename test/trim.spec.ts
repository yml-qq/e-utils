import { trim } from "../src/string/trim";

describe("#trim", function () {
  it("trim('  ab c ') should return clear space at both ends", function () {
    const str = "  ab c ";
    expect(trim(str)).toBe("ab c");
  });
  it("trim('  ab c ', 'both') should return clear space at both ends", function () {
    const str = "  ab c ";
    expect(trim(str, "both")).toBe("ab c");
  });
  it("trim('  ab c ', 'left') should return clear left space", function () {
    const str = "  ab c ";
    expect(trim(str, "left")).toBe("ab c ");
  });
  it("trim('  ab c ', 'right') should return clear right space", function () {
    const str = "  ab c ";
    expect(trim(str, "right")).toBe("  ab c");
  });
  it("trim('  ab c ', 'all') should return clear all space", function () {
    const str = "  ab c ";
    expect(trim(str, "all")).toBe("abc");
  });
});
