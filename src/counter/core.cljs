(ns counter.core
    (:require [goog.dom :as dom]
              [dommy.core :as dommy :refer [sel1 sel append! create-element set-class! set-attr! set-style!]]))


(defn buttons-look-off [buttons]
  (doall (map
           #(set-style! %
                        :border "5px solid rgba(100,200,100,0.2)")
           buttons)))


(defn button-look-on [button]
  (set-style! button
              :border "5px solid rgba(100,200,100,1)"))


(defn main []
  (let [bignum (create-element :div)
        counter (atom 0)
        buttons-row1 (create-element :div)
        buttons-row2 (create-element :div)
        inc1 (create-element :div)
        inc10 (create-element :div)
        inc50 (create-element :div)
        dec1 (create-element :div)
        dec10 (create-element :div)
        dec50 (create-element :div)
        increment (atom 1)
        reset (create-element :div)]
    (set-class! bignum "bignum")
    (append! (sel1 :body) bignum)

    (set-class! buttons-row1 "buttons-row1")
    (set-class! buttons-row2 "buttons-row2")
    (append! (sel1 :body) buttons-row1)
    (append! (sel1 :body) buttons-row2)

    (set-class! inc1 "inc")
    (append! buttons-row1 inc1)
    (dom/setTextContent inc1 "+1")  

    (set-class! dec1 "inc")
    (append! buttons-row2 dec1)
    (dom/setTextContent dec1 "-1")  

    (set-class! inc10 "inc")
    (append! buttons-row1 inc10)
    (dom/setTextContent inc10 "+10")  

    (set-class! dec10 "inc")
    (append! buttons-row2 dec10)
    (dom/setTextContent dec10 "-10")  

    (set-class! inc50 "inc")
    (append! buttons-row1 inc50)
    (dom/setTextContent inc50 "+50")  

    (set-class! dec50 "inc")
    (append! buttons-row2 dec50)
    (dom/setTextContent dec50 "-50")  

    (set-class! reset "reset")
    (append! (sel1 :body) reset)
    (dom/setTextContent reset "Reset")  

    (buttons-look-off (sel :.inc))
    (button-look-on inc1)

    (add-watch counter
               :update-bignum
               (fn [key atom old-state new-state]
                   (dom/setTextContent bignum (str new-state))))
    (reset! counter 0)
    (.addEventListener js/window
                       "keydown"
                       (fn [event]
                           (when (= (str (.-keyCode event))
                                    "32")
                             ;; stop spacebar from scrolling down
                             (.preventDefault event)
                             (swap! counter #(+ % @increment)))))
    (.addEventListener inc1
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on inc1)
                           (reset! increment 1)))
    (.addEventListener dec1
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on dec1)
                           (reset! increment -1)))
    (.addEventListener inc10
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on inc10)
                           (reset! increment 10)))
    (.addEventListener dec10
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on dec10)
                           (reset! increment -10)))
    (.addEventListener inc50
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on inc50)
                           (reset! increment 50)))
    (.addEventListener dec50
                       "mousedown"
                       (fn [event]
                           (buttons-look-off (sel :.inc))
                           (button-look-on dec50)
                           (reset! increment -50)))
    (.addEventListener reset
                       "mousedown"
                       (fn [event]
                           (reset! counter 0)))))


(.addEventListener
  js/window
  "DOMContentLoaded"
  main)
