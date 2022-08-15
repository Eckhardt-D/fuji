module default {
  type Todo {
    required property title -> str;
    required property done -> bool {
      default := false
    };
  }
}
