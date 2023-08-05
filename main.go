package main

import (
	"github.com/webview/webview"
)

type IncrementResult struct {
	Count uint `json:"count"`
}

func runWebview(url string) {

	// true = dev mode
	// false = prod

	w := webview.New(true)
	defer w.Destroy()
	w.SetTitle("Loena desktop app")
	w.SetSize(800, 600, webview.HintNone)
	w.Navigate(url)
	var count uint = 0
	w.Bind("increment", func() IncrementResult {
		count++
		println("count", count)
		return IncrementResult{Count: count}
	})
	// js-call = window.new_window("https://")
	w.Bind("new_window", func(url string) {
		runWebview(url)
	})
	w.Run()
}

func main() {

	runWebview("http://localhost:5757")
}
