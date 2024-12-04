import React, { useState } from 'react';
import './App.css';

const groupData = [
    {
        name: "INTUNE.PROD-WIN-PUB-GAME-SCO-DEFAULT-Groupe affectés socle",
        memberCount: 111,
        subGroups: ["INTUNE-ALL-RBAC-ALL-ALL-SCO-PROD"],
        members: ["WKS-023999", "WKS-023988", "WKS-024013", "WKS-024003", "WKS-023998", "WKS-024006", "WKS-023989", "WKS-023991", "WKS-023997", "WKS-024008", "WKS-024012", "WKS-024001", "WKS-024010", "WKS-023993", "WKS-023867", "WKS-023936", "WKS-023854", "WKS-023842", "WKS-023852", "WKS-023857", "WKS-023967", "WKS-022113"]
    },
    {
        name: "INTUNE.PROD-WIN-PUB-OPAC-SCO-DEFAULT-Groupe affectés socle",
        memberCount: 86,
        subGroups: ["INTUNE-ALL-RBAC-ALL-ALL-SCO-PROD"],
        members: ["S4BX9916", "WKS-018513", "WKS-018092", "WKS-018051", "WKS-017760", "WKS-018251", "WKS-017998", "WKS-018205", "WKS-018082", "WKS-018038"]
    },
    {
        name: "INTUNE.PROD-WIN-PUB-PAOS-SCO-DEFAULT-Groupe affectés socle",
        memberCount: 183,
        subGroups: ["INTUNE-ALL-RBAC-ALL-ALL-SCO-PROD"],
        members: ["WKS-017979", "WKS-011116", "WKS-018504", "WKS-011035", "WKS-023691", "WKS-010063"]
    },
    {
        name: "INTUNE.PROD-WIN-PUB-PDTR-SCO-DEFAULT-Groupe affectés socle",
        memberCount: 60,
        subGroups: ["INTUNE-ALL-RBAC-ALL-ALL-SCO-PROD"],
        members: ["TBL-004297", "TBL-004245", "WKS-023906", "PTB-014973"]
    },
    {
        name: "INTUNE.PROD-WIN-PUB-PAOS-SCO-DEFAULT-RING0",
        memberCount: 0,
        subGroups: ["INTUNE.INTE-WIN-PUB-PAOS-SCO-DEFAULT-Groupe affectés socle"],
        members: []
    },
    {
        name: "INTUNE.PROD-WIN-PUB-RESA-SCO-DEFAULT-Groupe affectés socle",
        memberCount: 198,
        subGroups: ["INTUNE-ALL-RBAC-ALL-ALL-SCO-PROD"],
        members: ["WKS-016546", "WKS-017826", "WKS-016464", "WKS-017911", "WKS-018525"]
    }
];

function App() {
    const [selectedGroup, setSelectedGroup] = useState(null);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="space-y-4">
                {groupData.map(group => (
                    <div key={group.name} className="border rounded-lg overflow-hidden">
                        <div 
                            className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedGroup === group.name ? 'bg-blue-50' : 'bg-white'}`}
                            onClick={() => setSelectedGroup(selectedGroup === group.name ? null : group.name)}
                        >
                            <h3 className="text-lg font-semibold">{group.name}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                                {group.memberCount} membres directs • {group.subGroups.length} sous-groupes
                            </div>
                        </div>
                        
                        {selectedGroup === group.name && (
                            <div className="p-4 bg-gray-50 border-t">
                                <div className="mb-4">
                                    <h4 className="font-medium mb-2">Sous-groupes :</h4>
                                    <div className="space-y-1">
                                        {group.subGroups.map((subGroup, index) => (
                                            <div key={index} className="text-sm bg-white p-2 rounded border">
                                                {subGroup}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-medium mb-2">Membres directs :</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {group.members.map((member, index) => (
                                            <div key={index} className="text-sm bg-white p-2 rounded border">
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;