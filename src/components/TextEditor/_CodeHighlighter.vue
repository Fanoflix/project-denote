<template>
  <div class="code-container block">
    <highlighter language="Javascript" :code="code" />
  </div>
</template>

<script>
import "highlight.js/lib/common";
import "highlight.js/styles/stackoverflow-dark.css";
import highlighter from "@highlightjs/vue-plugin";

export default {
  components: {
    highlighter: highlighter.component,
  },
  data() {
    return {
      code: `def CalculateQueryMagnitute(qtfidf):
    mag = 0
    for word in qtfidf:
        mag += qtfidf[word]**2
    queryMagnitude = math.sqrt(mag)
    return queryMagnitude


        return redirect(url_for('resultPage', answer=answer))
    return render_template('home.html', form=form)`,
    };
  },
  methods: {},
};
</script>

<style>
.code-container {
  font-size: 80%;
  max-width: 1500px;
  min-width: 500px;
  width: 70%;

  margin: 0px;
  margin-bottom: 40px;
}
pre {
  overflow-wrap: normal;
  overflow: auto;
  width: 100%;
  max-height: 400px;
}

.hljs {
  font-family: Consolas, monaco, monospace;
  font-weight: 400;
  padding: 1em;
  background: rgb(49, 49, 49);
  border-radius: 5px;
}

.hljs,
.hljs-subst {
  color: rgb(134, 233, 255);
}

.hljs-keyword {
  color: #f642ff;
}

.hljs-comment {
  overflow-wrap: break-word;
  word-wrap: break-word;
  color: #2f8757;
}
</style>