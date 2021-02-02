//
//  wetalkApp.swift
//  wetalk
//
//  Created by Mars on 2021/1/20.
//

import SwiftUI

@main
struct wetalkApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
