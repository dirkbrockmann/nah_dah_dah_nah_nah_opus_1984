[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# Nah dah dah nah nah... (Opus, 1984)

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable is an implementation of the famous [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) invented by [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) in 1970. Despite its very simple update rules, it can generate a wide range of unexpected dynamics.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**“Nah dah dah nah nah... (Opus, 1984)” - Conway's Game of Life**](https://www.complexity-explorables.org/explorables/nah-dah-dah-nah-nah-opus-1984/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/nah_dah_dah_nah_nah_opus_1984"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		nah_dah_dah_nah_nah_opus_1984.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `nah_dah_dah_nah_nah_opus_1984.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an argument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/nah_dah_dah_nah_nah_opus_1984.git
```


Go to the directory, install, build and show using `npm`:

1. `cd nah_dah_dah_nah_nah_opus_1984`
2. `npm install`
3. `npm run build`
4. `npm run show`

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]


