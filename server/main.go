package main

import (
	"log"
	"net/http"
	"time"

	"github.com/felixge/httpsnoop"
	"github.com/gorilla/mux"
)

func requestLogger(h http.Handler) http.Handler {
	handlerFunction := func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(w, r)

		uri := r.URL.String()
		method := r.Method
		proto := r.Proto

		m := httpsnoop.CaptureMetrics(h, w, r)

		code := m.Code
		size := m.Written
		duration := m.Duration

		log.Println(method, uri, proto, code, size, duration)
	}

	return http.HandlerFunc(handlerFunction)
}

func main() {
	router := mux.NewRouter()

	// Static Files (SPA)
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist"))).Methods("GET")

	// Setup Server
	server := &http.Server{
		Handler:      requestLogger(router),
		Addr:         ":3000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	log.Println("Listening on :3000...")
	log.Fatal(server.ListenAndServe())
}
